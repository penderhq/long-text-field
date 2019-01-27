# ![LongTextField](https://user-images.githubusercontent.com/44801418/48109954-32befe80-e27c-11e8-9848-d7e9860a4a8c.png) LongTextField

[![npm package][npm-badge]][npm]

Used for entering multiple lines of text.

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| longText | String | | Contents to be displayed / edited |
| onChange | Function |  | Callback invoked whenever the long text changes. : `({id: string, longText: boolean}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/long-text-field.svg
[npm]: https://www.npmjs.org/package/@cmds/long-text-field
