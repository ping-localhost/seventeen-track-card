# 17Track.net Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/hacs/integration) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/ping-localhost/seventeen-track-card?style=for-the-badge) ![GitHub Release Date](https://img.shields.io/github/release-date/ping-localhost/seventeen-track-card?style=for-the-badge)

This card gives you a list of shipment information generated by the official [17track.net sensor](https://www.home-assistant.io/integrations/seventeentrack/).

## Options

| Name                 | Type    | Requirement  | Description                                                                                                           |
|----------------------|---------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| type                 | string  | **Required** | `custom:seventeen-track-card`                                                                                         |
| entity               | string  | **Required** | The entity_id of the sensor you want to show (e.g., `sensor.seventeentrack_packages_in_transit`).                     |
| title                | string  | **Optional** | Custom title for the card. Defaults to `17Track.net`.                                                                 |
| sort_order           | string  | **Optional** | Sort packages by timestamp. Accepts `"ASC"` or `"DESC"` (case-insensitive). If not provided, no sorting is performed. |
| table_padding        | string  | **Optional** | Table padding for all sides. Provide a single CSS length (e.g., `"15px"`). Defaults to `"32px"`.                      |
| separator            | boolean | **Optional** | Enable row separators between packages. Defaults to `false`.                                                          |
| show_title           | boolean | **Optional** | Show the Title column. Defaults to `true`.                                                                            |
| show_status          | boolean | **Optional** | Show the Status column. Defaults to `true`.                                                                           |
| show_location        | boolean | **Optional** | Show the Location column. Defaults to `true`.                                                                         |
| show_last_update     | boolean | **Optional** | Show the Last Update column. Defaults to `true`.                                                                      |
| one_line_last_update | boolean | **Optional** | If `true`, displays the Last Update column with a fixed width style (i.e., one line). Defaults to `false`.            |

---

Add a custom element in your `ui-lovelace.yaml`

```yaml
      - type: custom:seventeen-track-card
        entity: sensor.seventeentrack_packages_in_transit
        title: "17Track.net"              # Default title
        sort_order: ""                    # Options: "ASC" or "DESC". Default is no sorting.
        table_padding: "32px"             # Default padding for all sides (use a single CSS value)
        separator: false                  # Enable row separators (default: false)
        show_title: true                  # Show the Title column (default: true)
        show_status: true                 # Show the Status column (default: true)
        show_location: true               # Show the Location column (default: true)
        show_last_update: true            # Show the Last Update column (default: true)
        one_line_last_update: false       # Display Last Update in one line (default: false)
```

## HACS installation

### Step 1

Install HACS as per there [Installation guide](https://hacs.xyz/docs/use/download/prerequisites/).

### Step 2

Add my repository as a custom repository in the HACS settings (and be sure to select the `Plugin` category). 

### Step 3

Install the card as you are used to and set it up as instructed by HACS, which consists of adding:
``` yml
  - url: /hacsfiles/seventeen-track-card/seventeen-track-card.js
    type: module
```

## Manual installation

### Step 1

Install `seventeen-track-card` by copying `seventeen-track-card.js` from this repo to `<config directory>/www/seventeen-track-card.js` on your Home Assistant instance.

**Example:**

```bash
wget https://raw.githubusercontent.com/ping-localhost/seventeen-track-card/master/seventeen-track-card.js
mv seventeen-track-card.js /config/www/
```

### Step 2

Link `seventeen-track-card` inside your `ui-lovelace.yaml`.

```yaml
resources:
  - url: /local/seventeen-track-card.js
    type: module
```

## Final result

![example](example.png)

**Suggestion**: If you set a ["memo" in 17Track](https://buyer.17track.net/en/myshipment), it will be displayed in the frontend as well.
