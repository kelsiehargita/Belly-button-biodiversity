// Fetch the JSON data
d3.json("../data/samples.json").then((importedData) => {
  var names = importedData.names;
  var nameSelector = d3.select("#selDataset");

  names.map((name) => {
    var option = nameSelector.append("option").text(name);
    option.attr("value", name);
  });

  handleOnChange()

  function getUserData(id) {
    return importedData.samples.filter((row) => {
      var desiredRow = row.id === id;

      if (desiredRow) {
        return row;
      } else {
        return;
      }
    });
  }

  function getFirstTen(id) {
    var userData = getUserData(id)[0];

    return {
      otu_ids: userData.otu_ids.slice(0, 10),
      otu_labels: userData.otu_labels.slice(0, 10),
      sample_values: userData.sample_values.slice(0, 10),
    };
  }

  function displayUserData(id) {
    const fullObject = getUserData(id)
    const topTenObject = getFirstTen(id);
    d3.select("#userNumber").html("h2").text(`User Id: ${id}`);

    //============= Bar Chart
    var trace0 = {
      type: "bar",
      x: topTenObject.sample_values,
      y: topTenObject.otu_ids,
      text: topTenObject.otu_labels,
      orientation: "h",
    };
    var layout = {
      title: `Top 10 OTUs found in Test Subject`,
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU IDs", autorange: "reversed" },
    };
    
    var bar_plot_data0 = [trace0];
    Plotly.newPlot("bar", bar_plot_data0, layout);
    //============= Bar Chart

    //============= Bubble Chart
    var trace0_2 = {
            x: fullObject[0].otu_ids,
            y: fullObject[0].sample_values,
            mode: 'markers',
            marker: {color: fullObject[0].otu_ids,  size: fullObject[0].sample_values },
            text: fullObject[0].otu_labels
        }

        var layout_bubble_0 = {
            title: `All OTUs for Test Subject`,
            xaxis: {title: "OTU IDs"},
            yaxis: {title: "Sample Values"},
            plot_bgcolor:"darkgray"
        }

        var bubble_plot_data_0 = [trace0_2];
 
        Plotly.newPlot("bubble", bubble_plot_data_0, layout_bubble_0);
    //============= Bubble Chart
  }

  function handleOnChange() {
    var currentSelectedUser = d3.select("#selDataset").property("value");
    displayUserData(currentSelectedUser);
  }

  d3.select("#selDataset").on("change", handleOnChange);
});
