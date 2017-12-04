<?php

Class Admin extends Controller {

  public function __construct() {

  }

  public function index() {

    $this->view('admin/login.php', [
      'this' => 'this',
    ]);
  }

  public function dashboard() {
    $this->view('admin/dashboard.php', [

    ]);
  }

}
