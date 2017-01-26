<?php
/**
 * @link      https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license   https://craftcms.com/license
 */

namespace craft\web\assets\qunit;

use craft\web\assets\AssetBundle;

/**
 * Qunit asset bundle.
 */
class QunitAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = '@lib/qunit';

        $this->css = [
            'qunit-2.0.1.css',
        ];

        $this->js = [
            'qunit-2.0.1.js',
        ];

        parent::init();
    }
}
