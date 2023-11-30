/* eslint-disable object-shorthand */
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../../../../src/main/webapp/app/app.constants';

@Injectable()
export class DataService {
  public resourceUrl = `${SERVER_API_URL}services/rdf/api/query/sparql`;

  constructor() {}
}
