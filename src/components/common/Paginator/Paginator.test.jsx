import React, { useState } from 'react';
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {
    test("pages count is 158 but should showed only 20", () => {
        const component = create(<Paginator totalItemsCount={15765} pageSize={100} portionSize={20} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(20);
    });

    test("if pages count is more then 20 button next should be present", () => {
        const component = create(<Paginator totalItemsCount={15765} pageSize={100} portionSize={20} />);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});