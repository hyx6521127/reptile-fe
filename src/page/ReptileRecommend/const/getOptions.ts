export default (title:string, time: string[], Yun:number[], He:number[]) => {
    return {
        title: {
          text: title,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["电建地产云立方", "合能珍宝琥珀"],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: time,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "电建地产云立方",
            type: "line",
            data: Yun,
          },
          {
            name: "合能珍宝琥珀",
            type: "line",
            data: He,
          },
        ],
      }
}