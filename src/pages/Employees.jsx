import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Search,
  Page,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 md: p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        id="employeesGrid"
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Search,
            Page,
            Toolbar
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
