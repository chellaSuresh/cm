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

		} 
}
