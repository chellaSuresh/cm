<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Configuration Management</title>

    <!-- Bootstrap Core CSS -->
  <link href="<%=request.getContextPath()%>/resources/css/bootstrap.min.css" rel="stylesheet">
  
  <link href="<%=request.getContextPath()%>/resources/css/jquery.orgchart.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<%=request.getContextPath()%>/resources/css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="<%=request.getContextPath()%>/resources/css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="<%=request.getContextPath()%>/resources/css/font-awesome.min.css" rel="stylesheet" type="text/css">


<!-- added code  -->
 
  <!--JQGrid related css  -->
  <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/jqgrid/jquery-ui.css" />
  <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/jqgrid/ui.jqgrid.css" />
  <!-- jQuery includes -->

    
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
      <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/jquery.jqGrid.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/jquery.orgchart.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/orgChart.js"></script>


  <style type="text/css">
  #getjson {
    width: 100px;
    height: 50px;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
  }
  /*
#chart{
    height: 300px;
    overflow: scroll;
    width: 500px;
    resize:both;
overflow:auto;
}
*/
  
  ul#upload-chart {
    float: right;
    list-style: none outside none;
  }
  
  ul#upload-chart li {
    background: none repeat scroll 0 0 #ECDC20;
    border: 1px solid #808080;
    border-radius: 2px;
    height: 44px;
    margin-top: 2px;
    padding-top: 5px;
    width: 200px;
  }
  </style>

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
               
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
               
            </div>
            <!-- /.navbar-collapse -->
        </nav>

<div id="page-wrapper">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Name</h3>
                            </div>
                            <div class="panel-body">
                           <div id="orgChartContainer">
     					 <div id="orgChart" ></div>
    						</div>                        
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Name</h3>
                            </div>
                            <div class="panel-body">
                              <div class="documents">
  									<div class="docFields">
  
  									</div>
  								</div>	
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <!-- Morris Charts -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o"></i> Name</h3>
                            </div>
                            <div class="panel-body">
                              <table id="grid"></table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->

        </div>        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <!-- <script src="js/jquery.js"></script>-->

    <!-- Bootstrap Core JavaScript 
    <script src="js/bootstrap.min.js"></script>-->

    <!-- Morris Charts JavaScript -->
    <script src="<%=request.getContextPath()%>/resources/js/plugins/morris/raphael.min.js"></script>
   <!-- <script src="js/plugins/morris/morris.min.js"></script>
    <script src="js/plugins/morris/morris-data.js"></script>-->

<%-- <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/jquery.orgchart.js"></script> --%>
    <script type="text/javascript">
    var testData = [
        {id: 1, name: 'CUS',uid:'CUS-123-000', parent: 0},
        {id: 2, name: 'CUS',uid:'CUS-123-000', parent: 1},
        {id: 3, name: 'CUS',uid:'CUS-123-000', parent: 1},
        {id: 4, name: 'CUS',uid:'CUS-123-000', parent: 1},
        {id: 5, name: 'CUS',uid:'CUS-123-000', parent: 1},
        {id: 6, name: 'CUS',uid:'CUS-123-000', parent: 2},
        
       
        
    ];
    $(function(){
        org_chart = $('#orgChart').orgChart({
            data: testData,
            showControls: true,
            allowEdit: true,
            onAddNode: function(node){ 
//                 log('Created new node on node '+node.data.id);
                org_chart.newNode(node.data.id); 
            },
            onDeleteNode: function(node){
//                 log('Deleted node '+node.data.id);
                org_chart.deleteNode(node.data.id); 
            },
            onClickNode: function(node){
//                 log('Clicked node '+node.data.id);
					console.log(node.data.uid);
            }

        });
    });

    // just for example purpose
    function log(text){
        $('#consoleOutput').append('<p>'+text+'</p>')
    }
    </script><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<script >
$(document).ready(function(){
	jqgridHandler.loadjQGrid();
	

});
</script>
</body>

</html>
