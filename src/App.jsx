import { useState } from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <div className='main-app'>
      <h1 className='main-title'>Buttons</h1>
      <div className='row'>
        <Button 
          btn_class='default'
          title='<Button />'
          text='Default'
        />
        <Button 
          hover='true'
          btn_class='default-hover'
          title='&:hover, &:focus'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button 
          btn_class='outline'
          title='<Button variant="outline" />'
          text='Default'
        />
        <Button 
          hover='true'
          btn_class='outline-hover'
          title='&:hover, &:focus'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button
          btn_class='text'
          title='<Button variant="text" />'
          text='Default'
        />
        <Button 
          hover='true'
          btn_class='text-hover'
          title='&:hover, &:focus'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button
          btn_class='primary-btn disableShadow'
          title='<Button disableShadow />'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button
          btn_class=''
          disabled = 'true'
          title='<Button disabled />'
          text='Default'
        />
        <Button 
          btn_class='text'
          disabled = 'true'
          title='<Button variant="text" disabled />'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button 
          btn_class='primary-btn'
          startIcon={<MdAddShoppingCart className='start-icon' />}
          title='<Button startIcon="local_grocery_store" />'
          text='Default'
        />
        <Button 
          btn_class='primary-btn'
          endIcon={<MdAddShoppingCart className='end-icon' />}
          title='<Button endIcon="local_grocery_store" />'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button
          btn_class='default primary-btn btn-sm'
          title='<Button size="sm" />'
          text='Default'
        />
        <Button
          btn_class='default primary-btn btn-md'
          title='<Button size="md" />'
          text='Default'
        />
        <Button
          btn_class='default primary-btn btn-lg'
          title='<Button size="lg" />'
          text='Default'
        />
      </div>
      <div className='row'>
        <Button
          btn_class='default'
          title='<Button color="default" />'
          text='Default'
        />
        <Button
          btn_class='default primary-btn'
          title='<Button color="primary" />'
          text='Default'
        />
        <Button
          btn_class='default secondary-btn'
          title='<Button color="secondary" />'
          text='Secondary'
        />
        <Button
          btn_class='default danger-btn'
          title='<Button color="danger" />'
          text='Danger'
        />
      </div>
      <div className='row'>
        <Button
          hover='true'
          btn_class='default'
          title='&:hover, &:focus'
          text='Default'
        />
        <Button
          hover='true'
          btn_class='default primary-btn-hover'
          text='Default'
        />
        <Button
          hover='true'
          btn_class='default secondary-btn-hover'
          text='Secondary'
        />
        <Button
          hover='true'
          btn_class='default danger-btn-hover'
          text='Danger'
        />
      </div>

    </div>
  )
}

export default App
