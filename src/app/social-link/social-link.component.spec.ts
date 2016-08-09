/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SocialLinkComponent } from './social-link.component';

describe('Component: SocialLink', () => {
  it('should create an instance', () => {
    let component = new SocialLinkComponent();
    expect(component).toBeTruthy();
  });
});
