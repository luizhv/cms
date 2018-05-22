<?php
/**
 * Created by PhpStorm.
 * User: makeilalundy
 * Date: 5/22/18
 * Time: 2:25 PM
 */

namespace app\helpers;

use \craft\helpers\StringHelper;

class StringHelperTest extends \Codeception\TestCase\Test
{
    public function testCamelCase(){
        $this->assertEquals('iLikePie', StringHelper::camelCase('i like pie'));
    }
    public function testCharAsArray(){
        $this->assertEquals(['p','i','e'], StringHelper::charsAsArray('pie'));
    }
    public function testCollapseWhitespace(){
        $this->assertEquals('pie hello hi hello', StringHelper::collapseWhitespace('pie    hello   hi     hello'));
    }
    public function testContains(){
        $this->assertEquals(true, StringHelper::contains('piehelloihello','pie'));
    }
    public function testContainsAny(){
        $this->assertEquals(true, StringHelper::containsAny('piehelloihello',['pie','b','el']));
    }
    public function testContainsAll(){
        $this->assertEquals(true, StringHelper::containsAll('piehelloihello',['pie','he','el']));
    }
    public function testCountSubstrings(){

    }
    public function testDelimit(){

    }
    public function testEndsWith(){

    }
    public function testEnsureLeft(){

    }
    public function testEnsureRight(){

    }
    public function testFirst(){

    }
    public function testCharAt(){

    }
    public function testHasLowerCase(){

    }
    public function testHasUpperCase(){

    }
    public function testIndexOf(){

    }
    public function testIndexOfLast(){

    }
    public function testInsert(){

    }
    public function testIsAlpha(){

    }
    public function testIsAlphanumeric(){

    }
    public function testIsWhitespace(){

    }
    public function testIsHexadecimal(){

    }
    public function testIsLowerCase(){

    }
    public function testIsUpperCase(){

    }
    public function testIsUUID(){

    }
    public function testLast(){

    }
    public function testLength(){

    }
    public function testLines(){

    }
    public function testLowerCaseFirst(){

    }
    public function testToKebabCase(){

    }
    public function testToCamelCase(){

    }
    public function testToPascalCase(){

    }
    public function testToSnakeCase(){

    }
    public function testSplit(){

    }
    public function testSplitOnWords(){

    }
    public function testStripHtml(){

    }
    public function testPadBoth(){

    }
    public function testPadLeft(){

    }
    public function testPadRight(){

    }
    public function testRandomString(){

    }
    public function testRandomStringWithChars(){

    }
    public function testRegexReplace(){

    }
    public function testRemoveLeft(){

    }
    public function testRemoveRight(){

    }
    public function testReplace(){

    }
    public function testReverse(){

    }
    public function testSafeTruncate(){

    }
    public function testStartsWith(){

    }
    public function testSubstr(){

    }
    public function testSwapCase(){

    }
    public function tesTtitleize(){

    }
    public function testToLowerCase(){

    }
    public function testToString(){

    }
    public function testToTitleCase(){

    }
    public function testTrim(){

    }
    public function testUpperCaseFirst(){

    }
    public function testUUID(){

    }
    public function testToAscii(){

    }
    public function testEncenc(){

    }
    public function testDecdec(){

    }
    public function testConvertToUtf8(){

    }
    public function testIsUtf8(){

    }
    //public function testEncoding(){

    //}
   // public function testContainsMb4(){

   // }
   // public function testEncodeMb4(){

   // }




}