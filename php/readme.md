# How to use
Just include the module:
```php
<?php
	include "path/random.php";
?>
```
Then you just have to generate a new instance of `Random`.

Without the seed, the function uses the `(new DateTime())->getTimestamp()` value as the seed.

soon...