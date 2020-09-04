# Belly-button-biodiversity

This application builds an interactive dashboard to explore the Belly Button Biodiversity of the microbes contained in different subjects navels. It uses Plotly and D3 to take
raw JSON data and display it within a bar chart/bubble chart.

# handleOnChange()
  /**
  An event listener that fires handleOnChange function anytime a user changes subject ID, as well as first page load.
  **/

# getUserData(id)
  /**
  Iterates through raw research data to find specific subject data by ID.
  **/

# getFirstTen(id)
  /**
  Returns 3 arrays of data with only first ten values present in individual arrays.
  **/

# displayUserData(id) 
  /**
  Uses getFirstTen and getUserData functions to render pertinent data within the DOM in Bar/Bubble graphs.
  **/
