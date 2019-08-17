# Default PAGE object:
page = PAGE
page {
	meta {
		description =
		description.override.field = description
		keywords =
		keywords.override.field = keywords
		author =
		copyright =
		robots = index, follow
	}

	10 = FLUIDTEMPLATE
	10 {
		template = FILE
		template.file = EXT:since1988-sitepackage/Resources/Private/Template/main.html
	}

	includeCSS {
		style = EXT:since1988-sitepackage/Resources/Public/Stylesheet/style.css
	}
}

config {
	# doctype declaration
	doctype = html5

	# search indexing
	index_enable = 1

	# realurl settings
	prefixLocalAnchors = all
	simulateStaticDocuments = 0
	absRefPrefix = /
	tx_realurl_enable = 1

	# no inline JavaScript
	removeDefaultJS = external

	# spam protection for email adresses
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = @
	spamProtectEmailAddresses_lastDotSubst = &sdot;

	# Images not to scale up
	noScaleUp = 1

	# language settings
	linkVars := addToList(L)
	uniqueLinkVars = 1
	htmlTag_langKey = de
	sys_language_mode = content_fallback ; 0
	sys_language_uid = 0
	language = de
	locale_all = de_DE.utf8

	admPanel = 0
}

lib.navi = HMENU
lib.navi {
	entryLevel = 0
	wrap = <div class="navi">|<br class="clearfix" /></div>
	1 = TMENU
	1 {
		NO = 1
		NO {
			allWrap = <div>|</div>
		}
	}
}

lib.content < styles.content.get
lib.content.wrap = <div class="content">|</div>
