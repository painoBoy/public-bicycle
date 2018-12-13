import React from 'react'
import {Card,Button,Form,Input,Icon,message, Checkbox} from 'antd'

const FormItem = Form.Item;
class FormLogin extends React.PureComponent{

    handleSubmit = ()=>{
       let userInfo = this.props.form.getFieldsValue();
       this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}恭喜你,当前密码为${userInfo.userPwd}`)
            }
       })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div >
                <Card title="行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" type="password"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="水平表单验证" style={{marginTop:10}}>
                    <Form layout="horizontal" style={{width:300}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [
                                   {required: true, message: '用户名不能为空!' },
                                    {min:3,message:'不少于3个字符'},
                                    {max:20,message:'不大于20个字符'},
                                    {pattern:new RegExp('^\\w+$','g'),message:'必须为字母或数字'} 
                                    ],
                            })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('userPwd', {
                                rules: [
                                    {required: true, message: '密码不能为空!' },
                                    {min:6,message:'不少于6个字符'},
                                    {max:20,message:'不大于20个字符'},
                                    {pattern:new RegExp('^\\w+$','g'),message:'必须为字母或数字'} 
                                ],
                            })(
                            <Input type="password" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('rember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a href="#" style={{float:'right'}}>忘记密码？</a>
                        </FormItem>
                        <FormItem>
                            <Button style={{width:'100%'}} type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

 export default Form.create()(FormLogin);