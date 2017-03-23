/*
* @Author: caiyou
* @Date:   2017-03-23 15:43:34
* @Last Modified by:   caiyou
* @Last Modified time: 2017-03-23 17:24:44
*/

/*
从某数据库接口得到如下值：
{
 rows: [
  ["Lisa", 16, "Female", "2000-12-01"],
  ["Bob", 22, "Male", "1996-01-21"]
 ],
 metaData: [
  {name: "name", note: ''},
  {name: "age", note: ''},
  {name: "gender", note: ''},
  {name: "birthday", note: ''}
 ]
}
rows是数据，metaData是对数据的说明。现写一个函数，将上面的Object转化为期望的数组：
[
 {name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01"},
 {name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21"},
]
*/

'use strict';

var source = {
 rows: [
  ["Lisa", 16, "Female", "2000-12-01"],
  ["Bob", 22, "Male", "1996-01-21"]
 ],
 metaData: [
  {name: "name", note: ''},
  {name: "age", note: ''},
  {name: "gender", note: ''},
  {name: "birthday", note: ''}
 ]
}






