import React from "react";
import './style.css'
import { memo } from "react";
import { cn as bem } from "@bem-react/classname";

function Pagination({currentPage, totalPages, onChangeCurrentPage}) {

    const cn = bem('Pagination')

}

export default memo(Pagination);