<?php

require_once('model/dbhandler.php');

Class Controller {
  public function model($modelName, $params = []) {
    require_once('model/' . $modelName . '.php');
    return new $modelName();
  }

  public function view($viewUrl, $data) {
    require_once('view/pages/' . $viewUrl);
  }


}
