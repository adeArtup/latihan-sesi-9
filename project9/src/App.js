import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/header';
import Cons from './component/content/Contents/ContentCons';
import CoHead from './component/content/Contents/ContentHeader';

export default function App() {
  return (
    <React.Fragment>  
      <Header />
      <CoHead />
      <Cons />
    </React.Fragment>
  );
}



