<!DOCTYPE html>
<html>
    <head>
        <title>Main Application</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body ng-app="Application" ng-controller="RootController">


        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" ui-sref="main" href="#" >ระบบหนึ่งคณะหนึ่งโมเดล</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">จัดการรายการ <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#" ui-sref="faculty">การจัดการรายการคณะ</a></li>
                                <li><a href="#" ui-sref="researcher">การจัดการรายการนักวิจัย</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li class="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>


        <div class="container">
            <div ui-view></div>
        </div>
        <!-- Library -->
        <script src="bower_components/ng-ckeditor/libs/ckeditor/ckeditor.js" type="text/javascript"></script>
        <script src="bower_components/angular/angular.min.js" type="text/javascript"></script>
        <script src="bower_components/angular-sanitize/angular-sanitize.min.js" type="text/javascript"></script>
        <script src="bower_components/angular-bootstrap/ui-bootstrap.min.js" type="text/javascript"></script>
        <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js" type="text/javascript"></script>
        <script src="bower_components/angular-ui-router/release/angular-ui-router.min.js" type="text/javascript"></script>
        <script src="bower_components/ng-ckeditor/ng-ckeditor.min.js" type="text/javascript"></script>


        <!-- Application -->
        <script src="js/app.js" type="text/javascript"></script>

        <!-- Application Services-->
        <script src="js/services/faculty.js" type="text/javascript"></script>
        <script src="../js/services/researcher.js" type="text/javascript"></script>
        
        <!-- Application Controller-->
        <script src="js/controllers/FacultyController.js" type="text/javascript"></script>
        <script src="js/controllers/MainController.js" type="text/javascript"></script>
        <script src="js/controllers/RootController.js" type="text/javascript"></script>
        <script src="js/controllers/ResearcherController.js" type="text/javascript"></script>
    </body>
    
</html>
