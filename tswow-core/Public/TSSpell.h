/*
 * This file is part of tswow (https://github.com/tswow/).
 * Copyright (C) 2020 tswow <https://github.com/tswow/>
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
#pragma once

#include "TSMain.h"
#include "TSClasses.h"
#include "TSPosition.h"
#include "TSSpellInfo.h"
#include "TSPosition.h"

struct SpellModifier;
class Spell;
struct SpellDestination;
class SpellImplicitTargetInfo;
class DispelInfo;
class TSAura;

class TC_GAME_API TSSpell {
public:
    Spell * spell;
    TSSpell(Spell *spell);
    TSSpell();
    TSSpell* operator->() { return this;}
    operator bool() const { return spell != nullptr; }
    bool operator==(TSSpell const& rhs) { return spell == rhs.spell; }
    bool IsNull() { return spell == nullptr; };
    bool IsAutoRepeat();
    TSWorldObject GetCaster();
    TSWorldObject GetOriginalCaster();
    TSWorldObject GetOriginalOrCurrentCaster();
    int32 GetCastTime();
    uint32 GetEntry();
    uint32 GetPowerCost();
    int32 GetDuration();
    uint32 GetGlyphSlot();
    TSPosition GetTargetDest();
    TSObject  GetTarget();
    TSSpellInfo GetSpellInfo();
    uint32 GetTriggeredCastFlags();
    bool IsTriggered();
    bool IsTriggeredByAura(uint32 aura);
    void SetAutoRepeat(bool repeat);
    void Cast(bool skipCheck);
    void Cancel();
    void Finish();
};

class TC_GAME_API TSSpellModifier
{
    TS_CLASS_DECLARATION(TSSpellModifier, SpellModifier, m_mod)
    uint32 GetOp();
    void SetOp(uint32 op);
    uint32 GetType();
    void SetType(uint32 type);
    int32 GetValue();
    void SetValue(int32 value);
    uint32 GetMaskA();
    void SetMaskA(uint32 mask);
    uint32 GetMaskB();
    void SetMaskB(uint32 mask);
    uint32 GetMaskC();
    void SetMaskC(uint32 mask);
    uint32 GetSpellID();
    void SetSpellID(uint32 spell);
    TSAura GetOwnerAura();
};

class TC_GAME_API TSSpellDestination
{
    TS_CLASS_DECLARATION(TSSpellDestination, SpellDestination, m_dest)

    float GetX();
    float GetY();
    float GetZ();
    float GetO();
    float GetMap();

    float GetOffsetX();
    float GetOffsetY();
    float GetOffsetZ();
    float GetOffsetO();

    uint64 GetTransportGUID();
    void Relocate(float x, float y, float z, float o);
    void RelocateOffset(float x, float y, float z, float o);
};

class TC_GAME_API TSSpellImplicitTargetInfo
{
    TS_CLASS_DECLARATION(TSSpellImplicitTargetInfo, SpellImplicitTargetInfo, m_info)
    bool IsArea();
    uint32 GetSelectionCategory();
    uint32 GetReferenceType();
    uint32 GetObjectType();
    uint32 GetCheckType();
    uint32 GetDirectionType();
    float CalcDirectionAngle();
    uint32 GetTarget();
    uint32 GetExplicitTargetMask();
    bool IsSourceSet();
    bool IsTargetSet();
};

class TC_GAME_API TSDispelInfo
{
    TS_CLASS_DECLARATION(TSDispelInfo, DispelInfo, m_info)
    TSWorldObject GetDispeller();
    uint32 GetDispellerSpellId();
    uint8 GetRemovedCharges();
    void SetRemovedCharges(uint8 amount);
};

class TC_GAME_API TSPlayerSpell
{
public:
    TSPlayerSpell(uint8 state, bool active, bool dependent, bool disabled);
    TSPlayerSpell() = default;
    uint8 GetState();
    bool GetActive();
    bool GetDependent();
    bool GetDisabled();
private:
    uint8 m_state;
    bool m_active;
    bool m_dependent;
    bool m_disabled;
};
