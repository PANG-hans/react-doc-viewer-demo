// MyApp.js
import React, { Component } from "react";
import logger from "logging-library";
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from "custom-error";

// const file = "https://h5.xinhuaxmt.com/h5/2024/svgTest/todo.xlsx";
// const type = "xlsx";

const file = "https://h5.xinhuaxmt.com/h5/2024/svgTest/test.docx";
const type = "docx";

class MyComponent extends Component {
  render() {
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        // onError={this.onError}
      />
    );
  }

  // onError(e) {
  //   logger.logError(e, 'error in file-viewer');
  // }
}
export default MyComponent;
