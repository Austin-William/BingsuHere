import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

/**
 * Service for managing products data
 */

@Injectable()
export class ShopService {
  url: string = '';

  constructor() {
    if (environment.apiUrl) {
      this.url = environment.apiUrl;
    }
  }

  /**
   * Retrieves all shops data
   * @returns The shops data
   */
  async getShopsData() {
    try {
      const response = await axios.get(`${this.url}/shops`)
        .then((response) => {
          if (!response.data) {
            return [];
          }
          return response.data;
        });

      return response;
    }
    catch (error) {
      console.error('Error fetching shops data');
      return [];
    }
  }
}

