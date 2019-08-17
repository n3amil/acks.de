<?php

class HomeCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/index.php?id=28');
    }

    // tests
    public function tryToTest(AcceptanceTester $I)
    {
        $I->canSee('WM 2018 - Endstand');
    }
}
