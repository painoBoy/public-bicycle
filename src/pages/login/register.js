import React from 'react'
import {Card,Button,Upload,Radio,Select,DatePicker,Icon,Form,Input,message} from 'antd'
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const InputTextArea = Input.TextArea;
const Option = Select.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class FormRegister extends React.PureComponent{
    state = {
        loading: false,
      };
      
    
      handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
    }

    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    }
    render(){
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">上传</div>
            </div>
          );
        const imageUrl = this.state.imageUrl;
        const formItemLayout = {
            labelCol:{ 
                xs:24,
                sm:4,
                md:4
            },
            wrapperCol:{
                xs:24,
                sm:12,
                md:8
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        // const {getFieldDecorator} = this.props.form.getFieldsValue();

        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="行内表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                        {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                        {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码" type="password" />
                                )
                            }
                        </FormItem>
                        <FormItem label="确认密码" {...formItemLayout}>
                        {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请再次输入密码" type="password" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                        {
                                getFieldDecorator('sex', {
                                    initialValue: '0',
                                    rules: []
                                })(
                                    <RadioGroup>
                                        <Radio value="0">男</Radio>
                                        <Radio value="1">女</Radio>
                                    </RadioGroup> 
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                        {
                                getFieldDecorator('state', {
                                    initialValue: '3',
                                })(
                                    <Select>
                                        <Option value="1">初始</Option>
                                        <Option value="2">进行中</Option>
                                        <Option value="3">测试</Option>
                                        <Option value="4">完成</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好游戏" {...formItemLayout}>
                        {
                                getFieldDecorator('games', {
                                    
                                })(
                                    <Select mode="multiple"  defaultValue={['LOL', 'PUBG']}>
                                        <Option value="LOL">LOL</Option>
                                        <Option value="DOTA2">DOTA2</Option>
                                        <Option value="星际">星际</Option>
                                        <Option value="守望先锋">守望先锋</Option>
                                        <Option value="PUBG">PUBG</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                        {
                                getFieldDecorator('birthday', {
                                   initialValue:moment('2018-08-15')
                                })(
                                    <DatePicker locale={locale}/>
                                )
                            }
                        </FormItem>
                        <FormItem label="地址" {...formItemLayout}>
                        {
                                getFieldDecorator('address', {
                                   initialValue:'四川省成都市武侯区'
                                })(
                                    <InputTextArea />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                    {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}> 
                            <Button type="primary">注 册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister);