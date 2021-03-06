/**
 * 可视化
 * create by huyoo ON 2019/2/21
 */
import React, {Fragment} from "react"
import {Card, Col, Row} from "antd";
import "./Analysis.less"
import HeadRow from "./component/HeadRow";
import TabChart from "./component/TabChart";
import {getTimeDistance} from "../../base/util";
import intl from 'react-intl-universal'

export default class Analysis extends React.Component {
    state = {
        loading: true,
        rangePickerValue: ''
    };

    componentDidMount() {
        let _this = this;
        setTimeout(() => {
            _this.setState({
                loading: false,
            })
        }, 1000)
    }

    handleRangePickerChange = rangePickerValue => {
        this.setState({
            rangePickerValue,
        });
    };

    selectDate = type => {
        this.setState({
            rangePickerValue: getTimeDistance(type),
        });
    };

    isActive = type => {
        const {rangePickerValue} = this.state;
        const value = getTimeDistance(type);
        if (!rangePickerValue[0] || !rangePickerValue[1]) {
            return null;
        }
        if (
            rangePickerValue[0].isSame(value[0], 'day') &&
            rangePickerValue[1].isSame(value[1], 'day')
        ) {
            return {
                color: '#1890ff'
            };
        }
        return null;
    };


    render() {
        const {loading} = this.state;

        return (
            <Fragment>
                <div className="analysis_head">
                    <HeadRow loading={loading}/>
                </div>
                <Card className="analysis_tab" loading={loading}>
                    <TabChart isActive={this.isActive}
                              selectDate={this.selectDate}
                              rangePickerValue={""}
                              handleRangePickerChange={this.handleRangePickerChange}/>
                </Card>
                <div className='analysis-body'>
                    <Row gutter={20}>
                        <Col lg={12} xs={24}>
                            <Card loading={loading} title={intl.get('app.analysis.online-top-search')}/>
                        </Col>
                        <Col lg={12} xs={24}>
                            <Card loading={loading} title={intl.get('app.analysis.the-proportion-of-sales')}/>
                        </Col>
                    </Row>
                </div>

                <div className="analysis_foot">
                    <Card loading={loading}>
                        1
                    </Card>
                </div>
            </Fragment>
        )
    }
}