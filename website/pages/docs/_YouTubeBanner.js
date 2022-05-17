import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'antd'

const YouTubeBanner = ({ embedID, title, description }) => {
    return (
        <Row style={{ backgroundColor: '#d9d9d9', padding: '12px 0px', borderRadius: '6px' }} gutter={24}>
            <Col sm={24} md={12}>
                <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${embedID}`}
                    frameBorder="0"
                    allowFullScreen
                    title={title}
                />
            </Col>

            <Col sm={24} md={12}>
                <h2>{title}</h2>

                { description }
            </Col>
        </Row>
    )
}

YouTubeBanner.propTypes = {
    embedId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
  
export default YouTubeBanner;