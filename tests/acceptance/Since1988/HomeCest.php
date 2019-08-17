<?php namespace Since1988;


use AcceptanceTester;

class HomeCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('https://since1988.de.ddev.site/index.php?id=28');
    }

    // tests
    public function tryToTest(AcceptanceTester $I)
    {
        $I->canSee('WM 2018 - Endstand');
    }
}
