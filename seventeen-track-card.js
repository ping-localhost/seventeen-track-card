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
    let packages = state.attributes.packages || [];

    // Sorting: use config.sort_order with values "ASC" or "DESC"
    const sortOrder = this.config.sort_order ? this.config.sort_order.toUpperCase() : null;
    if (sortOrder === "ASC" || sortOrder === "DESC") {
      packages.sort((first, second) => {
        const diff =
          new Date(first.timestamp).getTime() - new Date(second.timestamp).getTime();
        return sortOrder === "ASC" ? diff : -diff;
      });
    }

    // Create card structure if it doesn't exist
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = this.config.title || '17Track.net';

      // Table padding: if provided, use the given value for all sides; default is 32px.
      const pad = this.config.table_padding || "32px";
      const tablePadding = `${pad} ${pad} ${pad} ${pad}`;

      // Whether to add row separators (default false)
      const addSeparators =
        this.config.separator !== undefined ? this.config.separator : false;

      // Build style content with conditional separator rule
      const style = document.createElement('style');
      style.textContent = `
        table {
          width: 100%;
          padding: ${tablePadding};
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
        ${addSeparators ? `
        /* Add the style for separating rows */
        tbody tr:not(:last-child) {
          box-shadow: 0 1px 0 0 var(--primary-color);
        }
        ` : ''}
        td a {
          color: var(--primary-text-color);
          font-weight: normal;
        }
      `;

      this.content = document.createElement('div');
      card.appendChild(this.content);
      this.appendChild(style);
      this.appendChild(card);
    }

    // Date formatting function
    const formatDate = (input) =>
      input.toISOString().slice(0, 16).replace('T', ' ');

    // Determine which columns to show (default is true for each)
    const showTitle = this.config.show_title !== false;
    const showStatus = this.config.show_status !== false;
    const showLocation = this.config.show_location !== false;
    const showLastUpdate = this.config.show_last_update !== false;

    // Build table header with conditional one-line style for Last Update
    let headerHTML = '<tr>';
    if (showTitle) {
      headerHTML += '<th>Title</th>';
    }
    if (showStatus) {
      headerHTML += '<th>Status</th>';
    }
    if (showLocation) {
      headerHTML += '<th>Location</th>';
    }
    if (showLastUpdate) {
      if (this.config.one_line_last_update === true) {
        headerHTML += '<th style="width:25%">Last Update</th>';
      } else {
        headerHTML += '<th>Last Update</th>';
      }
    }
    headerHTML += '</tr>';

    // Build table rows based on visible columns
    const rowsHTML = packages
      .map((elem) => {
        let row = '<tr>';
        if (showTitle) {
          row += `
            <td>
              <a href="https://t.17track.net/en#nums=${elem.tracking_number}" target="_blank">
                ${elem.friendly_name ? elem.friendly_name : elem.tracking_number}
              </a>
            </td>
          `;
        }
        if (showStatus) {
          row += `<td>${elem.info_text}</td>`;
        }
        if (showLocation) {
          row += `<td>${elem.location ? elem.location : 'Unknown'}</td>`;
        }
        if (showLastUpdate) {
          row += `<td>${elem.timestamp ? formatDate(new Date(elem.timestamp)) : 'Unknown'}</td>`;
        }
        row += '</tr>';
        return row;
      })
      .join('');

    // Set innerHTML of content with the complete table
    this.content.innerHTML = `
      <table>
        <thead>
          ${headerHTML}
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>
    `;
  }
}

customElements.define('seventeen-track-card', SeventeenTrackCard);
console.info(
  "%c SeventeenTrackCard %c v1.1.3 ",
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
