class SeventeenTrackCard extends HTMLElement {
  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }

    this.config = config;
  }

  getCardSize() {
    return 3;
  }

  set hass(hass) {
    const entityId = this.config.entity;
    const state = hass.states[entityId];
    const sortPackages = this.config.sort || false;
    const packages = state.attributes.packages || [];

    if (sortPackages) {
      packages.sort((first, second) => {
        return new Date(first.timestamp).getTime() - new Date(second.timestamp).getTime();
      });
    }

    if (!this.content) {
      const card = document.createElement('ha-card');
      const style = document.createElement('style');
      this.content = document.createElement('div');

      card.header = this.config.title || '17Track.net';
      style.textContent = `
        table {
          width: 100%;
          padding: 0 32px 32px 32px;
        }
        thead th {
          text-align: left;
        }
        tbody tr:nth-child(odd) {
          background-color: var(--paper-card-background-color);
        }
        tbody tr:nth-child(even) {
          background-color: var(--secondary-background-color);
        }
        td a {
          color: var(--primary-text-color);
          font-weight: normal;
        }
      `;

      card.appendChild(this.content);
      this.appendChild(style);
      this.appendChild(card);
    }

    const formatDate = (input) => input.toISOString().slice(0, 16).replace('T', ' ');

    const content = `
      ${packages.map(elem => `
          <tr>
            <td>
              <a href="https://t.17track.net/en#nums=${elem.tracking_number}" target='_blank'>
                ${elem.friendly_name ? elem.friendly_name : elem.tracking_number}
              </a>
            </td>
            <td>${elem.info_text}</td>
            <td>${elem.location ? elem.location : 'Unknown'}</td>
            <td>${elem.timestamp ? formatDate(new Date(elem.timestamp)) : 'Unknown'}</td>
            </tr>
      `).join('')}
    `;

    this.content.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Location</th>
            <th>Last update</th>
            </tr>
        </thead>
      <tbody>
        ${content}
      </tbody>
      </table>
    `;
  }
}

customElements.define('seventeen-track-card', SeventeenTrackCard);
console.info("%c SeventeenTrackCard %c v1.1.3 ", "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
