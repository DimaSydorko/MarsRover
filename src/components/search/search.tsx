import "./search.less"
import React, { useState } from "react"
import { DataRequestApiT, SelectsT } from "../../types"
import { Form, Formik } from "formik"
import { Selector } from "../commons/selector"
import { FormItem } from "formik-antd"
import { Button, InputNumber } from "antd"
import { SearchOutlined } from '@ant-design/icons'

type PropsT = {
  cameras: SelectsT
  rovers: SelectsT
  error: string
  requestPhotos: (
    dataRequestApi:DataRequestApiT 
  ) => void
}

const Search:React.FC<PropsT> = ({cameras, rovers, error, requestPhotos}) => {
  const [camera, setCamera] = useState('fhaz')
  const [rover, setRover] = useState('curiosity')
  const [sol, setSol] = useState(0)

  return<>
  
    <Formik
      initialValues={{
        sol: 1,
      }}
      onSubmit={() => {
        requestPhotos({
          page: 1,
          camera: camera,
          rover: rover,
          sol: sol,
        })
      }}
    >
      {({handleSubmit}) => (
        <Form onSubmit={handleSubmit}>
          <div className='searchContainer'>
            <Selector selects={cameras} setSelected={setCamera}/>
            <Selector selects={rovers} setSelected={setRover}/>
            <FormItem name="Search-form">
              <InputNumber  
                name='sol'
                min={0}
                max={2000}
                defaultValue={0}
                onChange={(value)=>{setSol(value)}}
              />
            </FormItem>
            <Button 
              onClick={()=>handleSubmit()} 
              icon={<SearchOutlined/>} 
            >Search</Button>
          </div>
        </Form>
      )}
    </Formik>
    {error ? <div className='error'>{error}</div> : null}
  </>
}

export default Search