// // src/utils/exportToCSV.js

// /**
//  * Reusable function to export any JSON array as a CSV file.
//  * @param {Array} data - The array of objects to export.
//  * @param {string} filename - The desired name of the CSV file (e.g., "projects.csv").
//  */
// export const exportToCSV = (data, filename = "export.csv") => {
//     if (!data || data.length === 0) {
//       console.warn("No data available for export");
//       return;
//     }
  
//     // Extract headers dynamically from keys of the first object
//     const headers = Object.keys(data[0]);
//     const csvRows = [];
  
//     // Add header row
//     csvRows.push(headers.join(","));
  
//     // Add data rows
//     for (const row of data) {
//       const values = headers.map((header) => {
//         const escaped = String(row[header]).replace(/"/g, '""'); // escape double quotes
//         return `"${escaped}"`; // wrap each cell in quotes
//       });
//       csvRows.push(values.join(","));
//     }
  
//     // Combine into a CSV string
//     const csvString = csvRows.join("\n");
  
//     // Create Blob and trigger download
//     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", filename);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };
  