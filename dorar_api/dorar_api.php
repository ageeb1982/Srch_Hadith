<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<style>
	
		body{
			direction:rtl;
			padding:50px;
			font-family:Tahoma;
			font-size:12px;
		}
		
		.info-subtitle{
			color:#bb5700;
		}
		
		.search-keys{
			color:red;
			background-color:#FFFF00
		}
		
	</style>
    
<title>Untitled Document</title>
</head>

<body>
<form id="form1" name="form1" method="post" action="">
  <label>كلمات البحث:  
  <input type="text" name="k" id="textfield" />
  </label>
  <label>
  <input type="submit" name="button" id="button" value="بحث" />
  </label>
</form>
</body>
</html>

<?php

	$x = file_get_contents("http://dorar.net/dorar_api.json?skey=". $_POST['k']);
	
	$x = json_decode($x);
	
	print $x->ahadith->result;
