<?php
/**
 * @link      https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license   https://craftcms.com/license
 */

namespace craft\web\assets\updates;

use craft\web\assets\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * Asset bundle for the Updates utility
 */
class UpdatesAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = __DIR__.'/dist';

        $this->depends = [
            CpAsset::class,
        ];

        $this->css = [
            'updates.css',
        ];

        $this->js = [
            'UpdatesUtility'.$this->dotJs(),
        ];

        parent::init();
    }
}
