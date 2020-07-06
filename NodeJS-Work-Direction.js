/**
 * * text
 * ! text
 * ? text
 * TODO: text
 * @param myParam



* !  ~~~˚∆˚~~~  Node JS Work Direction ~~~˚∆˚~~~


*! 01 Folder Create …………………
----------------------------
** api --> controller,
** api --> routes,
** config, controllers, middleware, models, utils, validator,
** public -->  images,
** public -->  scripts,
** public -->  styles,
** public -->  uploads,
** views -->  pages,
** views -->  partials,



*! 02 app.js Setup  …………………
----------------------------
**  ~~~˚∆˚~~~ Import Express, Router, Third party Middleware  ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ Express Bind in APP   ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ EJS Set  ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ Custom Middleware   ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ All Middleware   ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ Router Bind in APP   ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ Home Router   ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ Server On PORT || 5500  ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ MongoDB  ~~~˚∆˚~~~



*! 03 Model Create …………………
----------------------------
* TODO: যেই সব আইটেম এর নিজস্ব আলাদা আলাদা id থাকবে তাদের জন্য Model Create করতে হবে।
* TODO: কোন Model এর সাথে কোন Model এর relation তা খেয়াল রাখতে হবে।
* TODO: common কিছু Model Name: User Model, Profile Model, Post Model, Comment Model



*! 04 EJS / React Work …………………
----------------------------
**  ~~~˚∆˚~~~ pages --> file.ejs   ~~~˚∆˚~~~
**  ~~~˚∆˚~~~ partials --> file.ejs  ~~~˚∆˚~~~



*! 05 Create Route & Controller …………………
----------------------------
**   ~~~˚∆˚~~~  Auth Route  ~~~˚∆˚~~~
**   ~~~˚∆˚~~~  Auth Controller  ~~~˚∆˚~~~
**   ~~~˚∆˚~~~  password hash in Bcrypt  ~~~˚∆˚~~~



*! 06 Validation …………………(1. check --> validator fontEnd er name="", 2.validationResult = Error)
----------------------------
** import -->  const { check, validationResult } = require('express-validator')
** check --> builtin validation
** check --> Custom validation
** errors -->
    ** let errors = validationResult(req)
    ** const formatter = (error) => error.msg
    ** console.log(errors.formatWith(formatter).mapped())
** Sanitization --> (incoming value ke modify kora) --> trim(), normalizeEmail() etc















 *
*/