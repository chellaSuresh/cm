var jqgridHandler ={
		loadjQGrid : function(){
			
			var applicationGrid = $("#grid");
			var data = [[48803, "DSK1", "02200220", "actType"], [48769, "APPR", "77733337", "acttye"]];

			$("#grid").jqGrid({
			    datatype: "local",
			    
			    colNames: ['Document No', 'Document Name', 'UTC Type', 'Arctefact Type'],
			    colModel: [{
			        name: 'Document No',
			        index: 'Document No',
			        /*width: 100,*/
			        sorttype: "int"},
			    {
			        name: 'Document Name',
			        index: 'Document Name',
			       /* width: 100,*/
			        sorttype: "string"},
			    {
			        name: 'UTC Type',
			        index: 'UTC Type',
			        /*width: 100,*/
			        sorttype:"string"},
			    {
			        name: 'Arctefact Type',
			        index: 'Arctefact Type',
			        /*width: 100,*/
			        sorttype: "float"},
			    
			    ],
			    height: 250,
			    //width: '100%',
			    autowidth: true,
			    caption: "Documents",
			    // ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}
			});
	
			$(window).on("resize", function () {
   			 var newWidth = $("#grid").closest(".ui-jqgrid").parent().width();
   			 applicationGrid.jqGrid("setGridWidth", newWidth, true);
			});
			var names = ['Document No', 'Document Name', 'UTC Type', 'Arctefact Type'];
			var mydata = [];

			for (var i = 0; i < data.length; i++) {
			    mydata[i] = {};
			    for (var j = 0; j < data[i].length; j++) {
			        mydata[i][names[j]] = data[i][j];
			    }
			}

			for (var i = 0; i <= mydata.length; i++) {
			    $("#grid").jqGrid('addRowData', i + 1, mydata[i]);
			}

			/*
			$("#grid").jqGrid('setGridParam', {onSelectRow: function(rowid,iRow,iCol,e){alert('row clicked');}});
			*/
			$("#grid").jqGrid('setGridParam', {ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}});
			$(document).off('click').on('click','.node-h6',function(e){
				//$('.label_node').click(function(e){
			    	console.log(e.target.innerText);
			    	$('.data, .exporttoExcel').remove();
			    	var docsJSon=[
			    	          {
			    			"docid": "D100",
			    		    "utcCode": "CUS",
			    		    "Reference": "100",
			    		    "documentName":"",
			    		    "docmentlink": "Administration",
			    			"priority":"M"
			    			 },
			    			 {
			    	    			"docid": "D103",
			    	    		    "utcCode": "CUS",
			    	    		    "Reference": "100",
			    	    		    "documentName":"",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"M"
			    	    			 },
			    	    			 {
			    	    	    			"docid": "D104",
			    	    	    		    "utcCode": "CUS",
			    	    	    		    "Reference": "100",
			    	    	    		    "documentName":"",
			    	    	    		    "docmentlink": "Administration",
			    	    	    			"priority":"M"
			    	    	    			 },
			    			 {
			    				 "docid": "D105",
			    	    		    "utcCode": "CUS",
			    	    		    "Reference": "101",
			    	    		    "documentName":"",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"C"
			    			 },
			    			 {
			    				 "docid": "D102",
			    	    		    "utcCode": "CUS",
			    	    		    "Reference": "101",
			    	    		    "documentName":"",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"O"
			    			 }
			    		]
			    	var docsJSon2=[
			        	          {
			        			"docid": "D100",
			        		    "utcCode": "CUS",
			        		    "Reference": "100",
			        		    "documentName":"",
			        		    "docmentlink": "Administration",
			        			"priority":"M"
			        			 },
			        			 {
			        				 "docid": "D101",
			        	    		    "utcCode": "CUS",
			        	    		    "Reference": "101",
			        	    		    "documentName":"",
			        	    		    "docmentlink": "Administration",
			        	    			"priority":"C"
			        			 },
								{
			    				 "docid": "D101",
			    	    		    "utcCode": "CUS",
			    	    		    "Reference": "101",
			    	    		    "documentName":"",
			    	    		    "docmentlink": "Administration",
			    	    			"priority":"O"
			    			 }
			        		]
			    	if(e.target.innerText == "CUS-123-001"){
			    		$.each(docsJSon, function(i, obj){
			        		if(obj.priority == "M"){
			        			var html = "<div class='data mandatory'><br><input type='checkbox' class='docCheckbox' checked>"	+
			                	"<div class='docName'>"+obj.documentName+ "</div><div>M</div></div>";
			            	    $('.docFields').append(html);
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
			    		$('.documents').append("<div class='exporttoExcel'><a href='#' id='test' onClick='javascript:fnExcelReport();'>Export to Excel</a></div>");
			        	/* $('.docFields').append(
			        	"<div class='data'><br><input type='checkbox' class='docCheckbox'>"	+
			        	"<div class='docName'>"+docsJSon[0].utcCode+"-"+docsJSon[0].Reference+ "</div></div>"
			        	); */
			        	$('.docFields').show();
			    	}else{
			    		$.each(docsJSon2, function(i, obj){
			        		if(obj.priority == "M"){
			        			var html = "<div class='data mandatory'><br><input type='checkbox' class='docCheckbox' checked>"	+
			                	"<div class='docName'>"+obj.documentName+ "</div><div>M</div></div>";
			            	    $('.docFields').append(html);
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
			        	$('.documents').append("<div class='exporttoExcel'><a href='#' id='test' onClick='javascript:fnExcelReport();'>Export to Excel</a></div>");
			        	/* $('.docFields').append(
			        	"<div class='data'><br><input type='checkbox' class='docCheckbox'>"	+
			        	"<div class='docName'>"+docsJSon[0].utcCode+"-"+docsJSon[0].Reference+ "</div></div>"
			        	); */
			        	$('.docFields').show();
			    	}
			    	
			    });
		} 
}
