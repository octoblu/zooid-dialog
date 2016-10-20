import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

import Dialog from './'

chai.use(chaiEnzyme())

describe('<Dialog />', () => {
  it('should render nothing when visible is falsy', () => {
    const sut = shallow(<Dialog>FANCY</Dialog>)
    expect(sut).to.be.empty
  });


  describe('when visible prop is truthy', () => {
    it('should not be empty', () => {
      const sut = shallow(<Dialog visible>Awesome Dialog</Dialog>)
      expect(sut).to.not.be.empty
    })

    it('should adopt the className passed in as prop', () => {
      const sut = shallow(<Dialog visible className="I-AM-GROOT" />)
      expect(sut).to.have.className('I-AM-GROOT')
    })

    it('should render children when passed in as prop', () => {
      const sut = shallow(<Dialog visible><div className="unique"/></Dialog>)
      expect(sut).to.contain(<div className="unique" />)
    });
  })
})
