
    var fill = d3.scale.category20();
   
    d3.layout.cloud().size([300, 300]) //size([x,y])  词云显示的大小
    //map 返回新的object数组
        .words(["查询", "复制", "粘贴", "查询", "复制", "粘贴","查询", "复制", "粘贴","查询", "复制", "粘贴","查询", "复制", "粘贴", "查询", "复制", "粘贴","查询", "复制", "粘贴","查询", "复制", "粘贴"].map(function(d) {
			return {"text": d, "size": 12 + Math.random() * 25};
        }))
        //~~的作用是单纯的去掉小数部分，不论正负都不会改变整数部分
        //这里的作用是产生0 1
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", draw)//结束时运行draw函数
        .start();

    //append()使用函数在指定元素的结尾添加内容
    //transform:translate(x,y)  定义2d旋转，即平移，向右平移x,向下平移y
	
    function draw(words) {
        var svg = d3.select("#tests").append("svg")
				    .attr("width", 450)
				    .attr("height", 400)
				    .attr("style","border:1px solid #FFFFFF")
				    .append("g")
					.style("fill-opacity","0");
			
			
		var circle1 = svg.attr("transform", "translate(200,200)")
						 .selectAll("text")
						 .data(words)
						 .enter().append("text")
						 .transition()
						 .duration(500)
						 .ease("circle")
						 .delay(function(d, i) { return 200 * i; })
						 //.style("border","1px solid blue")
						 .style("fill","#ffffff")
						 .style("font-size", function(d) { return d.size + 70 + "px"; })
						 //.style("font-family", "Impact")
						 //.style("fill", function(d, i) { return fill(i); })//fill 在前面15行定义为颜色集
						 //.attr("text-anchor", "middle")
						 .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
						 .text(function(d) { return d.text; });
	
			circle1.transition()
				   //.attr("transform", "translate(200,200)")
				   //.duration(1000)
				   //.ease("circle")
				   //.delay(function(d, i) { return 200 * i; })
				   .style("font-size", function(d) { return d.size + "px"; })
				   .style("font-family", "Impact")
				   .style("fill-opacity","1")
				   .style("fill", function(d, i) { return fill(i); })
				   .attr("text-anchor", "middle")
				   .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
				   .text(function(d) { return d.text; });
				   

    }

