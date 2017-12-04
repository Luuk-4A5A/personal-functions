<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Making costum editor</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <main class="main">
      <div class="main-buttons">
        <button pressed="false" editbutton="strong"><i class="fa fa-bold"></i></button>
        <button pressed="false" editbutton="u"><i class="fa fa-underline"></i></button>
        <button pressed="false" editbutton="em"><i class="fa fa-italic"></i></button>
        <button pressed="false" editbutton="s"><i class="fa fa-strikethrough"></i></button>
        <button class="dropdown"><i class="fa fa-font"></i></button>
        <button class="dropdown"><i class="fa fa-text-height"></i></button>
        <button><i class="fa fa-tint"></i></button>
      </div>
    </main>
    <main class="main-content">
      <div class="wrapper-content">
        <div id="content" class="content" contenteditable="true">

        </div>
      </div>
    </main>


    <script src="/library.js" charset="utf-8"></script>
    <script src="main.js" charset="utf-8"></script>
  </body>
</html>
