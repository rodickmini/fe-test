/*
* @Author: caiyou
* @Date:   2016-12-21 12:16:54
* @Last Modified by:   caiyou
* @Last Modified time: 2017-03-23 17:48:56
*/

'use strict'


var arr = [
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: 666},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: 666},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: 666},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: 666},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: 666},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: 666},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: null},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: null},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: null},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: null},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: null},
  {part_id: 123, part_name: 'fdsfdfd', cat_id: 999, price: null},
]

//把数组处理成这种格式：[{part_id: 123, part_name: 'fdsfdfd'}]，并剔除price为null的项

