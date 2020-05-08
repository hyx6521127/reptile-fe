export default (title:string, data:any) => {
    return {
        title: {
            text: title,
          },
        tooltip: {
          trigger: "item",
          formatter: "{b}({d}%)",
        },
        series: [
          {
            type: "pie",
            radius: '50%',
            data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            animation: false,
          }
        ],
      }
}