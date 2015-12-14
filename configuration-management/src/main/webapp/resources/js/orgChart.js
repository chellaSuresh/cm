var av=[];
var docsJSon2;
var docsJSon;
var abc = [];
var jqgridata;
var jqgridHandler ={
		init : function(data){
			
			jqgridHandler.loadjQGrid(data);
			jqgridHandler.selectCheckBox();
			jqgridHandler.exportToGrid();
		},
		loadjQGrid : function(data){
			//JqGrid function
			var applicationGrid = $("#grid");
			//var data = [[48803, ++, "02200220", "actType"], [48769, "APPR", "77733337", "acttye"]];

		 jqgridata=	$("#grid").jqGrid({
			    datatype: "local",
			    
			    colNames: ['Document Type Classification', 'Document Type', 'UTC Type', 'Arctefact Type'],
			    colModel: [{
			        name: 'Document_No',
			        index: 'Document_No',
			        /*width: 100,*/
			        sorttype: "int"},
			    {
			        name: 'Document_Name',
			        index: 'Document_Name',
			       /* width: 100,*/
			        sorttype: "string"},
			    {
			        name: 'UTC_Type',
			        index: 'UTC_Type',
			        /*width: 100,*/
			        sorttype:"string"},
			    {
			        name: 'Arctefact_Type',
			        index: 'Arctefact_Type',
			        /*width: 100,*/
			        sorttype: "float"},
			    
			    ],
			    height: 250,
			    //width: '100%',
			    autowidth: true,
			    caption: "Documents",
			    rowNum:20,
			   	rowList:[10,20,30],
			    pager: "#pager",
			    // ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}
			});
		 	//jqGrid responsive code 
			$(window).on("resize", function () {
   			 var newWidth = $("#grid").closest(".ui-jqgrid").parent().width();
   			 applicationGrid.jqGrid("setGridWidth", newWidth, true);
			});
			var names = ['Document_No', 'Document_Name', 'UTC_Type', 'Arctefact_Type'];
			var mydata = [];

			//viewing the documents 
			$(document).off('click').on('click','.node-h6',function(e){
				//$('.label_node').click(function(e){
			    	console.log(e.target.innerText);
			    	$('.data, .exporttoExcel').remove();
			    	
			    	//solution json
			    	 docsJSon=[
			    	           {
			    	        	  	"docid": "001",
			    		    		"utcCode": "SOL-901",
			    		    		"atcCode": "222.0-",
			    		    		"documentName":"Requirements Specification",
			    		    		"docmentlink": "Administration",
			    					"priority":"M"
			    	           },
			    	           {
			    	    			"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "222.1-",
			    	    		    "documentName":"Deployment Guide",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"M"
			    	           },
			    	           {
			    	    			"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "223.0",
			    	    		    "documentName":"CM Plan",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"M"
			    	           },
			    	           {
			    	    	    	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "223.1",
			    	    		    "documentName":"Master Configuration Index",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"M"
			    	           },
			    	           {
			    				 	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "223.2",
			    	    		    "documentName":"Baseline Report",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"M"
			    	           },
			    	           {
			    				 	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "222.3",
			    	    		    "documentName":"Site Engineering Data",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"O"
			    	           },
			    	           {
			    				 	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "222.2",
			    	    		    "documentName":"CustomerQuistioner",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"O"
			    	           },
			    	           {
			    				 	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "222.5",
			    	    		    "documentName":"Site Survey",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"C"
			    	           },
			    	           {
			    				 	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "222.6",
			    	    		    "documentName":"Site installation Reports",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"C"
			    	           },
			    	           {
			    				 	"docid": "001",
			    	    		    "utcCode": "SOL-901",
			    	    		    "atcCode": "225.1",
			    	    		    "documentName":"Migration Plan",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"C"
			    	           }
			    	         ]
			    	 //projects JSON
			    	 docsJSon2=[
			        	          {
			        	        	    "docid": "001",
			        	        	    "utcCode": "PRJ-901",
			        	        	    "atcCode": "202-",
			        	        	    "documentName":"Investigation Report",
			        	        	    "docmentlink": "Administration",
			        	        	    "priority":"O"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "206-",
			        	    		    "documentName":"Resource Plan",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"M"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "207-",
			        	    		    "documentName":"Time Plan",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"M"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "208-",
			        	    		    "documentName":"Purchase Order",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"M"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "209-",
			        	    		    "documentName":"Solution Map",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"M"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "201.0-",
			        	    		    "documentName":"Cost BudgetPlan",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"M"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "201.2-",
			        	    		    "documentName":"Audit Report",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"O"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "201.9-",
			        	    		    "documentName":"Change Request",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"O"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "205-",
			        	    		    "documentName":"Technical Report",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"O"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "202.2-",
			        	    		    "documentName":"Root Cause Analysis",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"O"
			        			 },
			        			 {
			        				 	"docid": "001",
			        	    		    "utcCode": "PRJ-901",
			        	    		    "atcCode": "202.6-",
			        	    		    "documentName":"Acceptance Certificate",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"O"
			        			 },
			        		]
			    	//products JSON
			    	
			    	 docsJSon3=[
				        	          {
				        			"docid": "001",
				        		    "utcCode": "PRD-150",
				        		    "atcCode": "221.0-",
				        		    "documentName":"Requirement Specifications",
				        		    "docmentlink": "Administration",
				        			"priority":"O"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.1-",
				        	    		    "documentName":"Support Plan",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"M"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.2-",
				        	    		    "documentName":"Release Plan",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"M"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.4-",
				        	    		    "documentName":"System Design Guide",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"M"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.5-",
				        	    		    "documentName":"Technical Product Description",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"M"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.6-",
				        	    		    "documentName":"Commercial Product Description",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"M"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.12-",
				        	    		    "documentName":"Exemption Record,Decision",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"C"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.19-",
				        	    		    "documentName":"Product Package Description",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"C"
				        			 },
				        			 {
				        				 "docid": "001",
				        	    		    "utcCode": "PRD-150",
				        	    		    "atcCode": "221.22-",
				        	    		    "documentName":"Export Control",
				        	    		    "docmentlink": "Administration",
				        	    			"priority":"C"
				        			 }
				        			
				        		]
			    	
			    	
			    	
			    	//checking the priority of the documents and showing them 
			    	if(e.target.innerText == "SOL-901-001"){
			    		$.each(docsJSon, function(i, obj){
			        		if(obj.priority == "M"){
			        			var html = "<div class='data mandatory'><br><input type='checkbox' class='docCheckbox' checked>"	+
			                	"<div class='docName'>"+obj.documentName+ "</div><div>M</div></div>";
			            	    $('.docFields').append(html);
//			            	    var data = [[obj.docid+i,obj.documentName,obj.utcCode,obj.atcCode]];
//			            	    jqgridHandler.loadjQGrid(data);
			            	    addGridRow(obj);
			        		}else if(obj.priority == "C"){
			        	    var html = "<div class='data condition'><br><input type='checkbox' class='docCheckbox'>"	+
			            	"<div class='docName'>"+obj.documentName+ "</div><div>C</div></div>";
			        	    $('.docFields').append(html);
			        		}else{
			        			 var html = "<div class='data '><br><input type='checkbox' class='docCheckbox'>"	+
			        	        	"<div class='docName'>"+obj.documentName+ "</div><div>O</div></div>";
			        	    	    $('.docFields').append(html);
			        		}
			        	});
			    		$('.documents').append("<div class='exporttoExcel'></div>");
			        	
			        	$('.docFields').show();
			    	}else if(e.target.innerText=="PRJ-901-001"){
			    		$.each(docsJSon2, function(i, obj){
			        		if(obj.priority == "M"){
			        			var html = "<div class='data mandatory'><br><input type='checkbox' class='docCheckbox' checked>"	+
			                	"<div class='docName'>"+obj.documentName+ "</div><div>M</div></div>";
			            	    $('.docFields').append(html);
//			            	    var data = [[obj.docid+i,obj.documentName,obj.utcCode,obj.atcCode]];
//			            	    jqgridHandler.loadjQGrid(data);
			            	    addGridRow(obj);
			        		}else if(obj.priority == "C"){
			        	    var html = "<div class='data condition'><br><input type='checkbox' class='docCheckbox'>"	+
			            	"<div class='docName'>"+obj.documentName+ "</div><div>C</div></div>";
			        	    $('.docFields').append(html);
			        		}else{
			        			 var html = "<div class='data '><br><input type='checkbox' class='docCheckbox'>"	+
			        	        	"<div class='docName'>"+obj.documentName+ "</div><div>O</div></div>";
			        	    	    $('.docFields').append(html);
			        		}
			        	});
			        	$('.documents').append("<div class='exporttoExcel'></div>");
			        	/* $('.docFields').append(
			        	"<div class='data'><br><input type='checkbox' class='docCheckbox'>"	+
			        	"<div class='docName'>"+docsJSon[0].utcCode+"-"+docsJSon[0].Reference+ "</div></div>"
			        	); */
			        	$('.docFields').show();
			    		
			    	}else if(e.target.innerText=="PRD-150-001"){
			    		$.each(docsJSon3, function(i, obj){
			        		if(obj.priority == "M"){
			        			var html = "<div class='data mandatory'><br><input type='checkbox' class='docCheckbox' checked>"	+
			                	"<div class='docName'>"+obj.documentName+ "</div><div>M</div></div>";
			            	    $('.docFields').append(html);
//			            	    var data = [[obj.docid,obj.documentName,obj.utcCode,obj.atcCode]];
//			            	    jqgridHandler.loadjQGrid(data);
			            	    addGridRow(obj);
			        		}else if(obj.priority == "C"){
			        	    var html = "<div class='data condition'><br><input type='checkbox' class='docCheckbox'>"	+
			            	"<div class='docName'>"+obj.documentName+ "</div><div>C</div></div>";
			        	    $('.docFields').append(html);
			        		}else{
			        			 var html = "<div class='data '><br><input type='checkbox' class='docCheckbox'>"	+
			        	        	"<div class='docName'>"+obj.documentName+ "</div><div>O</div></div>";
			        	    	    $('.docFields').append(html);
			        		}
			        	});
			        	$('.documents').append("<div class='exporttoExcel'></div>");
			        	/* $('.docFields').append(
			        	"<div class='data'><br><input type='checkbox' class='docCheckbox'>"	+
			        	"<div class='docName'>"+docsJSon[0].utcCode+"-"+docsJSon[0].Reference+ "</div></div>"
			        	); */
			        	$('.docFields').show();
			    	}
			    	
			    });
			
			
			//search operation
			   $(document).on("keyup","#filter",function(){
				   	 
			        // Retrieve the input field text and reset the count to zero
			        var filter = $(this).val(), count = 0;
			 
			        // Loop through the comment list
			        $(".node select option").each(function(e){
			        	
			            // If the list item does not contain the text phrase fade it out
			            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
			                $(this).fadeOut();
			               
			 
			            // Show the list item if the phrase matches and increase the count by 1
			            } else {

			            	
			                $(this).show();
			                count++;
			            }
			        });
			  });
			   
			   //export to excel click function 
			   $('#test').click(function(){
					  fnExcelReport();
				  });
				  
			
		},
		selectCheckBox : function(){
			
			//check , uncheck functionality of the documents 
		  $(document).on("change",".docCheckbox",function(e){
			  console.log(e);
			  //adding the data to the grid when checked 
			  if($(this).is(':checked') == true){
		      		//iterating the json data
		        	$.each(docsJSon2, function(i, obj){
		        		
		        		if(obj.documentName == e.currentTarget.nextSibling.innerText){
		        			addGridRow(obj);	        			

		        		}
		        	});
		        	$.each(docsJSon, function(i, obj){
		        		if(obj.documentName == e.currentTarget.nextSibling.innerText){
		        			
		        			addGridRow(obj);	  
		        		}
		        	});
		        	$.each(docsJSon3, function(i, obj){
		        		if(obj.documentName == e.currentTarget.nextSibling.innerText){
		        			
		        			addGridRow(obj);	  
		        		}
		        	});
		        	
		        }else{
		        
		        //removing or deleting the data added into grid when checked 
		        var data = $("#grid").jqGrid('getGridParam', 'data');
		        for (var i = 0; i < data.length; i++) {
		
		        	if(data[i].Document_Name == e.currentTarget.nextSibling.innerText){
		        		$('#grid').jqGrid('delRowData',data[i].id);
		        	}
	   		
		        }
		        	
		        }
	        	});
	        	
	        },
	        exportToGrid : function(){
	        	jqgridHandler.loadjQGrid(abc);
	
	        }
	
}
// export to the excel function 
function fnExcelReport() {

    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

    tab_text = tab_text + '<x:Name>Documents Sheet</x:Name>';

    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

    tab_text = tab_text + "<table border='1px'>";
    tab_text = tab_text + $('.ui-jqgrid-htable').html();
    tab_text = tab_text + $('#grid').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';

    $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#test').attr('download', 'Test file.xlsx');

}
//adding the data to the grid when check box is clicked
function addGridRow(obj){
	
	var p = $('#grid').getGridParam();
    if (p.data){
        var newData = {Document_No: obj.atcCode, Document_Name: obj.documentName,UTC_Type:obj.utcCode,Arctefact_Type:obj.atcCode+"xxx/"+obj.utcCode+"-"+obj.docid+"/xxx"};
        var rowId = $.jgrid.randId();
        $("#grid").jqGrid('addRowData', rowId, newData);
        
    }
}
//TO Unload the Popupbox
function unloadPopupBox() {	
	$('#popup_box').fadeOut("slow");
	$("#container").css({ // this is just for style		
		"opacity": "1"  
	}); 
}	

// To Load the Popupbox
function loadPopupBox() {
	$('#popup_box').fadeIn("slow");
	$("#container").css({ // this is just for style
		"opacity": "0.3"  
	}); 		
}