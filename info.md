## Description

Seventeen Track Card is a customizable card for the Home Assistant Lovelace front-end. It allows you to show what packages are currently in transit.

## Options

| Name                 | Type    | Requirement  | Description                                                                                                           |
|----------------------|---------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| type                 | string  | **Required** | `custom:seventeen-track-card`                                                                                         |
| entity               | string  | **Required** | The entity_id of the sensor you want to show (e.g., `sensor.seventeentrack_packages_in_transit`).                     |
| title                | string  | **Optional** | Custom title for the card.                                                                                            |
| sort_order           | string  | **Optional** | Sort packages by timestamp. Accepts `"ASC"` or `"DESC"` (case-insensitive). If not provided, no sorting is performed. |
| table_padding        | string  | **Optional** | Table padding for all sides. Provide a single CSS length (e.g., `"15px"`). Defaults to `"32px"`.                      |
| separator            | boolean | **Optional** | Enable row separators between packages. Defaults to `false`.                                                          |
| show_title           | boolean | **Optional** | Show the Title column. Defaults to `true`.                                                                            |
| show_status          | boolean | **Optional** | Show the Status column. Defaults to `true`.                                                                           |
| show_location        | boolean | **Optional** | Show the Location column. Defaults to `true`.                                                                         |
| show_last_update     | boolean | **Optional** | Show the Last Update column. Defaults to `true`.                                                                      |
| one_line_last_update | boolean | **Optional** | If `true`, displays the Last Update column with a fixed width style (i.e., one line). Defaults to `false`.            |

## Example

![](https://github.com/ping-localhost/seventeen-track-card/blob/master/example.png?raw=true)
