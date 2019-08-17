<?php

namespace Acks;

use AcceptanceTester;

class HomeCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('https://acks.de.ddev.site/index.php?id=1');
    }

    // tests
    public function tryToTest(AcceptanceTester $I)
    {
        $I->canSee('[AcKs] - Ancient Knights - Wir brauchen keine Logik!');
    }
}
