const d = document;

const ctx1 = document.getElementById("chart-main");
const ctx2 = document.getElementById("chart-side-1");
const ctx3 = document.getElementById("chart-side-2");
const $select = d.getElementById("chart-main-option");

const loadMainChart = () => {
  let localOption = localStorage.getItem("select-option");
  if (localOption !== undefined && localOption !== null) {
    $select.value = localOption;

    switch (localOption) {
      case "DE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Engineer Salaries Per Year",
                data: [105382, 119449, 133517, 147585, 161653, 175721],
                borderColor: [
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "red",
                ],
                backgroundColor: "rgba(170, 173, 255, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 200000,
              },
            },
          },
        });
        break;
      case "DS":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Scientist Salaries Per Year",
                data: [89267, 110839, 132411, 153982, 175554, 197125],
                borderColor: [
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "red",
                ],
                backgroundColor: "rgba(255, 165, 0, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 200000,
              },
            },
          },
        });
        break;
      case "DA":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Analyst Salaries Per Year",
                data: [89321, 95528, 101734, 107941, 114147, 120353],
                borderColor: [
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "red",
                ],
                backgroundColor: "rgba(255, 192, 203, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 200000,
              },
            },
          },
        });
        break;
      case "MLE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Machine Learning Engineer Salaries Per Year",
                data: [83576, 115836, 148095, 180354, 212614, 244873],
                borderColor: [
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "red",
                ],
                backgroundColor: "rgba(34, 139, 34, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 300000,
              },
            },
          },
        });
        break;
      default:
        console.log("Error en la impresión de la Chart");
    }
  } else {
    $select.value = "DE";
    mainChart = new Chart(ctx1, {
      type: "line",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Data Engineer Salaries Per Year",
            data: [105382, 119449, 133517, 147585, 161653, 175721],
            borderColor: [
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "red",
            ],
            backgroundColor: "rgba(170, 173, 255, 0.4)",
            fill: true,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 200000,
          },
        },
      },
    });
  }
};

const selectMainChart = () => {
  $select.addEventListener("change", function () {
    localStorage.setItem("select-option", this.value);
    console.log(this.value);
    mainChart.destroy();
    switch (this.value) {
      case "DE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Engineer Salaries Per Year",
                data: [105382, 119449, 133517, 147585, 161653, 175721],
                borderColor: [
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "red",
                ],
                backgroundColor: "rgba(170, 173, 255, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 200000,
              },
            },
          },
        });
        break;
      case "DS":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Scientist Salaries Per Year",
                data: [89267, 110839, 132411, 153982, 175554, 197125],
                borderColor: [
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "red",
                ],
                backgroundColor: "rgba(255, 165, 0, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 200000,
              },
            },
          },
        });
        break;
      case "DA":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Analyst Salaries Per Year",
                data: [89321, 95528, 101734, 107941, 114147, 120353],
                borderColor: [
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "red",
                ],
                backgroundColor: "rgba(255, 192, 203, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 200000,
              },
            },
          },
        });
        break;
      case "MLE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Machine Learning Engineer Salaries Per Year",
                data: [83576, 115836, 148095, 180354, 212614, 244873],
                borderColor: [
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "red",
                ],
                backgroundColor: "rgba(34, 139, 34, 0.4)",
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 300000,
              },
            },
          },
        });
        break;
      default:
        console.log("Error en la impresión de la Chart");
    }
  });
};

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [
      "Data Engineer",
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Otros",
    ],
    datasets: [
      {
        label: "Desarrolladores en el Área de datos",
        data: [1307, 1243, 910, 629, 2510],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(75, 192, 192)",
          "rgba(255, 205, 86)",
          "rgba(237, 125, 229)",
          "rgba(156, 153, 204, 0.2)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },
  },
});

new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["United States", "United Kingdom", "Canada", "Germany", "Others"],
    datasets: [
      {
        label: "Desarrolladores en el país",
        data: [5305, 401, 241, 71, 581],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 205, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(201, 203, 207, 0.4)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        fill: false,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },
  },
});

d.addEventListener("DOMContentLoaded", (e) => {
  loadMainChart();
  selectMainChart();
});
