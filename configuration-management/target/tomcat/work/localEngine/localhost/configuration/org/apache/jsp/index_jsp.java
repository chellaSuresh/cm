package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("\r\n");
      out.write("    <meta charset=\"utf-8\">\r\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n");
      out.write("    <meta name=\"description\" content=\"\">\r\n");
      out.write("    <meta name=\"author\" content=\"\">\r\n");
      out.write("\r\n");
      out.write("    <title>Configuration Management</title>\r\n");
      out.write("\r\n");
      out.write("    <!-- Bootstrap Core CSS -->\r\n");
      out.write("  <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n");
      out.write("  \r\n");
      out.write("  <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/jquery.orgchart.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Custom CSS -->\r\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/sb-admin.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Morris Charts CSS -->\r\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/plugins/morris.css\" rel=\"stylesheet\">\r\n");
      out.write("\r\n");
      out.write("    <!-- Custom Fonts -->\r\n");
      out.write("    <link href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- added code  -->\r\n");
      out.write(" \r\n");
      out.write("  <!--JQGrid related css  -->\r\n");
      out.write("  <link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/jqgrid/jquery-ui.css\" />\r\n");
      out.write("  <link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/jqgrid/ui.jqgrid.css\" />\r\n");
      out.write("  <!-- jQuery includes -->\r\n");
      out.write("\r\n");
      out.write("    \r\n");
      out.write("  <script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n");
      out.write("      <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/jquery.jqGrid.min.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/jquery.orgchart.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/orgChart.js\"></script>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("  <style type=\"text/css\">\r\n");
      out.write("  #getjson {\r\n");
      out.write("    width: 100px;\r\n");
      out.write("    height: 50px;\r\n");
      out.write("    border-radius: 3px;\r\n");
      out.write("    margin-left: 20px;\r\n");
      out.write("    margin-top: 20px;\r\n");
      out.write("    float: left;\r\n");
      out.write("  }\r\n");
      out.write("  /*\r\n");
      out.write("#chart{\r\n");
      out.write("    height: 300px;\r\n");
      out.write("    overflow: scroll;\r\n");
      out.write("    width: 500px;\r\n");
      out.write("    resize:both;\r\n");
      out.write("overflow:auto;\r\n");
      out.write("}\r\n");
      out.write("*/\r\n");
      out.write("  \r\n");
      out.write("  ul#upload-chart {\r\n");
      out.write("    float: right;\r\n");
      out.write("    list-style: none outside none;\r\n");
      out.write("  }\r\n");
      out.write("  \r\n");
      out.write("  ul#upload-chart li {\r\n");
      out.write("    background: none repeat scroll 0 0 #ECDC20;\r\n");
      out.write("    border: 1px solid #808080;\r\n");
      out.write("    border-radius: 2px;\r\n");
      out.write("    height: 44px;\r\n");
      out.write("    margin-top: 2px;\r\n");
      out.write("    padding-top: 5px;\r\n");
      out.write("    width: 200px;\r\n");
      out.write("  }\r\n");
      out.write("  </style>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("\r\n");
      out.write("<body>\r\n");
      out.write("\r\n");
      out.write("    <div id=\"wrapper\">\r\n");
      out.write("\r\n");
      out.write("        <!-- Navigation -->\r\n");
      out.write("        <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n");
      out.write("            <!-- Brand and toggle get grouped for better mobile display -->\r\n");
      out.write("            <div class=\"navbar-header\">\r\n");
      out.write("                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n");
      out.write("                    <span class=\"sr-only\">Toggle navigation</span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                    <span class=\"icon-bar\"></span>\r\n");
      out.write("                </button>\r\n");
      out.write("            </div>\r\n");
      out.write("            <!-- Top Menu Items -->\r\n");
      out.write("            <ul class=\"nav navbar-right top-nav\">\r\n");
      out.write("               \r\n");
      out.write("            </ul>\r\n");
      out.write("            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n");
      out.write("            <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n");
      out.write("               \r\n");
      out.write("            </div>\r\n");
      out.write("            <!-- /.navbar-collapse -->\r\n");
      out.write("        </nav>\r\n");
      out.write("\r\n");
      out.write("<div id=\"page-wrapper\">\r\n");
      out.write("\r\n");
      out.write("            <div class=\"container-fluid\">\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"col-lg-8\">\r\n");
      out.write("                        <div class=\"panel panel-default\">\r\n");
      out.write("                            <div class=\"panel-heading\">\r\n");
      out.write("                                <h3 class=\"panel-title\"><i class=\"fa fa-long-arrow-right\"></i> Name</h3>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <div class=\"panel-body\">\r\n");
      out.write("                           <div id=\"orgChartContainer\">\r\n");
      out.write("     \t\t\t\t\t <div id=\"orgChart\" ></div>\r\n");
      out.write("    \t\t\t\t\t\t</div>                        \r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"col-lg-4\">\r\n");
      out.write("                        <div class=\"panel panel-default\">\r\n");
      out.write("                            <div class=\"panel-heading\">\r\n");
      out.write("                                <h3 class=\"panel-title\"><i class=\"fa fa-long-arrow-right\"></i> Name</h3>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <div class=\"panel-body\">\r\n");
      out.write("                              <div class=\"documents\">\r\n");
      out.write("  \t\t\t\t\t\t\t\t\t<div class=\"docFields\">\r\n");
      out.write("  \r\n");
      out.write("  \t\t\t\t\t\t\t\t\t</div>\r\n");
      out.write("  \t\t\t\t\t\t\t\t</div>\t\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("                <!-- /.row -->\r\n");
      out.write("                <!-- Morris Charts -->\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"col-lg-12\">\r\n");
      out.write("                        <div class=\"panel panel-default\">\r\n");
      out.write("                            <div class=\"panel-heading\">\r\n");
      out.write("                                <h3 class=\"panel-title\"><i class=\"fa fa-bar-chart-o\"></i> Name</h3>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            <div class=\"panel-body\">\r\n");
      out.write("                              <table id=\"grid\"></table>\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("                <!-- /.row -->\r\n");
      out.write("            </div>\r\n");
      out.write("            <!-- /.container-fluid -->\r\n");
      out.write("\r\n");
      out.write("        </div>        <!-- /#page-wrapper -->\r\n");
      out.write("\r\n");
      out.write("    </div>\r\n");
      out.write("    <!-- /#wrapper -->\r\n");
      out.write("\r\n");
      out.write("    <!-- jQuery -->\r\n");
      out.write("    <!-- <script src=\"js/jquery.js\"></script>-->\r\n");
      out.write("\r\n");
      out.write("    <!-- Bootstrap Core JavaScript \r\n");
      out.write("    <script src=\"js/bootstrap.min.js\"></script>-->\r\n");
      out.write("\r\n");
      out.write("    <!-- Morris Charts JavaScript -->\r\n");
      out.write("    <script src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/plugins/morris/raphael.min.js\"></script>\r\n");
      out.write("   <!-- <script src=\"js/plugins/morris/morris.min.js\"></script>\r\n");
      out.write("    <script src=\"js/plugins/morris/morris-data.js\"></script>-->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("    <script type=\"text/javascript\">\r\n");
      out.write("    var testData = [\r\n");
      out.write("        {id: 1, name: 'CUS',uid:'CUS-123-000', parent: 0},\r\n");
      out.write("        {id: 2, name: 'CUS',uid:'CUS-123-000', parent: 1},\r\n");
      out.write("        {id: 3, name: 'CUS',uid:'CUS-123-000', parent: 1},\r\n");
      out.write("        {id: 4, name: 'CUS',uid:'CUS-123-000', parent: 1},\r\n");
      out.write("        {id: 5, name: 'CUS',uid:'CUS-123-000', parent: 1},\r\n");
      out.write("        {id: 6, name: 'CUS',uid:'CUS-123-000', parent: 2},\r\n");
      out.write("        \r\n");
      out.write("       \r\n");
      out.write("        \r\n");
      out.write("    ];\r\n");
      out.write("    $(function(){\r\n");
      out.write("        org_chart = $('#orgChart').orgChart({\r\n");
      out.write("            data: testData,\r\n");
      out.write("            showControls: true,\r\n");
      out.write("            allowEdit: true,\r\n");
      out.write("            onAddNode: function(node){ \r\n");
      out.write("//                 log('Created new node on node '+node.data.id);\r\n");
      out.write("                org_chart.newNode(node.data.id); \r\n");
      out.write("            },\r\n");
      out.write("            onDeleteNode: function(node){\r\n");
      out.write("//                 log('Deleted node '+node.data.id);\r\n");
      out.write("                org_chart.deleteNode(node.data.id); \r\n");
      out.write("            },\r\n");
      out.write("            onClickNode: function(node){\r\n");
      out.write("//                 log('Clicked node '+node.data.id);\r\n");
      out.write("\t\t\t\t\tconsole.log(node.data.uid);\r\n");
      out.write("            }\r\n");
      out.write("\r\n");
      out.write("        });\r\n");
      out.write("    });\r\n");
      out.write("\r\n");
      out.write("    // just for example purpose\r\n");
      out.write("    function log(text){\r\n");
      out.write("        $('#consoleOutput').append('<p>'+text+'</p>')\r\n");
      out.write("    }\r\n");
      out.write("    </script><script type=\"text/javascript\">\r\n");
      out.write("\r\n");
      out.write("  var _gaq = _gaq || [];\r\n");
      out.write("  _gaq.push(['_setAccount', 'UA-36251023-1']);\r\n");
      out.write("  _gaq.push(['_setDomainName', 'jqueryscript.net']);\r\n");
      out.write("  _gaq.push(['_trackPageview']);\r\n");
      out.write("\r\n");
      out.write("  (function() {\r\n");
      out.write("    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\r\n");
      out.write("    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\r\n");
      out.write("    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\r\n");
      out.write("  })();\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
      out.write("<script >\r\n");
      out.write("$(document).ready(function(){\r\n");
      out.write("\tjqgridHandler.loadjQGrid();\r\n");
      out.write("\t\r\n");
      out.write("\r\n");
      out.write("});\r\n");
      out.write("</script>\r\n");
      out.write("</body>\r\n");
      out.write("\r\n");
      out.write("</html>\r\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
