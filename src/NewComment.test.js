import React from 'react';
import { shallow, mount, render } from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () => {
  const postNewCommentMock = jest.fn()
  it('renders without crashing', () => {
    const wrapper = shallow(<NewComment postNewComment={postNewCommentMock}/>)
    expect(wrapper.length).toBe(1)
  })
  it('Handles enter', () => {
    const wrapper = mount(<NewComment postNewComment={postNewCommentMock}/>)
    const eventMock = {
        keyCode: 13,
        preventDefault: jest.fn()
    }
    wrapper.instance().refs.comment.value = 'teste'
    wrapper.instance().handleEnter(eventMock)
    expect(eventMock.keyCode).toBe(13)
    expect(eventMock.preventDefault.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls[0][0].comment).toBe('teste')
    expect(wrapper.instance().refs.comment.value).toBe('')
  })
})

// Perguuntar:
// 1 - Sobre o resultado do coverage?
// 2 - Qual o mais performático, base.push / base.bindState ou base.syncState?