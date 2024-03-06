var match = this.rows.find((row) => {
			return row.data === data;
		});
		
		return match || false;
	}

return new Promise((resolve, reject)=>{
			if(renderInPosition && this.getDisplayRows().length){
				if(this.table.options.pagination){
					this._setDataActual(data, true);
				}else{
					this.reRenderInPosition(() => {
						this._setDataActual(data);
					});
				}
        }else{
				if(this.table.options.autoColumns && columnsChanged && this.table.initialized){
					this.table.columnManager.generateColumnsFromRowData(data);
				}
				this.resetScroll();
				
				this._setDataActual(data);
			}
//yes
if(Array.isArray(data)){
			this.dispatch("data-processing", data);
			
			data.forEach((def, i) => {
				if(def && typeof def === "object"){
					var row = new Row(def, this);
					this.rows.push(row);
