import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Sort,
  Edit,
  Selection,
  Filter,
  Page,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="p-2 m-2 mt-20 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        id="customersGrid"
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        editSettings={{ allowEditing: true, allowDeleting: true}}
        toolbar={['Delete', 'Edit']}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Toolbar,
            Sort,
            Edit,
            Selection,
            Filter
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
