// Styles
import styles from './index.module.css';

function genDummyData(colCount, rowCount) {
  const d = new Array(rowCount).fill(null).map((item, idx) => {
    const arr = [];

    for (let i = 0; i < colCount; i++) {
      arr.push({
        columnName: `COLUMN_${i + 1}`,
        value: `r${idx + 1}c${i + 1}`,
      });
    }

    return arr;
  });

  return d;
}

const dummyData = genDummyData(8, 11);

export default function AppTable(props) {
  const data = props.tableData || dummyData;
  const columns = data.reduce((acc, record) => {
    const columnNames = [];
    record.forEach((field) => {
      if (!acc.includes(field.columnName)) {
        columnNames.push(field.columnName);
      }
    });

    return [
      ...acc,
      ...columnNames,
    ];
  }, []);

  // Renderers
  function renderTableData(row) {
    return row.map((field, index) => <td key={`${field.columnName}-${index}`}>{ field.value }</td>);
  }

  function renderTableRows() {
    return (
      <tbody>
        {data.map((row, index) => <tr key={index}>{ renderTableData(row) }</tr>)}
      </tbody>
    );
  }

  function renderTableHeader() {
    return (
      <thead>
        <tr>
          { columns.map((col) => <th key={col}>{ col }</th>)}
        </tr>
      </thead>
    );
  }

  function renderTable() {
    return (
      <table className={styles.appTable}>
        { renderTableHeader() }
        { renderTableRows() }
      </table>
    );
  }

  return renderTable();
}
