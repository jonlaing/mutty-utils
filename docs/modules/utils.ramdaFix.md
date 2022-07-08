[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / ramdaFix

# Namespace: ramdaFix

[utils](utils.md).ramdaFix

## Table of contents

### Functions

- [and](utils.ramdaFix.md#and)
- [modify](utils.ramdaFix.md#modify)
- [not](utils.ramdaFix.md#not)
- [or](utils.ramdaFix.md#or)
- [prop](utils.ramdaFix.md#prop)
- [propNotIncluded](utils.ramdaFix.md#propnotincluded)

## Functions

### and

▸ **and**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [f: Function, g: Function, v: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [f: Object \| Function, g: Object \| Function, v: any]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/ramdaFix.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/ramdaFix.ts#L9)

___

### modify

▸ **modify**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [key: string, f: Function, obj: Record<string, any\>]\> |
| `R` | extends `unknown` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [key: string \| Object, f: Object \| Function, obj: Object \| Record<string, any\>]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/ramdaFix.ts:26](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/ramdaFix.ts#L26)

___

### not

▸ **not**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [f: Function, vals: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [f: Object \| Function, vals: any]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/ramdaFix.ts:3](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/ramdaFix.ts#L3)

___

### or

▸ **or**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [f: Function, g: Function, v: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [f: Object \| Function, g: Object \| Function, v: any]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/ramdaFix.ts:5](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/ramdaFix.ts#L5)

___

### prop

▸ **prop**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [k: string, obj: Record<string, any\>]\> |
| `R` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [k: string \| Object, obj: Object \| Record<string, any\>]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/ramdaFix.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/ramdaFix.ts#L13)

___

### propNotIncluded

▸ **propNotIncluded**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [arr: any[], key: string, obj: Record<string, any\>]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [arr: any[] \| Object, key: string \| Object, obj: Object \| Record<string, any\>]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/ramdaFix.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/ramdaFix.ts#L18)
