import * as React from "react";
import { render } from "react-dom";
import { MainCanvas } from "./components/MainCanvas";
import "./styles.css";

const rootElement = document.getElementById("root");
render(<MainCanvas />, rootElement);
